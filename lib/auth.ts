import { cookies } from "next/headers";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

const COOKIE="homeledger_session";
const DAYS=30;
function hash(v:string){return crypto.createHash("sha256").update(v).digest("hex")}
export async function createSession(memberId:string){
 const raw=crypto.randomBytes(32).toString("hex");
 await prisma.session.create({data:{memberId,tokenHash:hash(raw),expiresAt:new Date(Date.now()+DAYS*86400000)}});
 (await cookies()).set(COOKIE,raw,{httpOnly:true,sameSite:"lax",secure:process.env.NODE_ENV==="production",path:"/",maxAge:DAYS*86400});
}
export async function clearSession(){
 const c=await cookies(), raw=c.get(COOKIE)?.value;
 if(raw) await prisma.session.deleteMany({where:{tokenHash:hash(raw)}});
 c.delete(COOKIE);
}
export async function getCurrentMember(){
 const raw=(await cookies()).get(COOKIE)?.value;
 if(!raw)return null;
 const session=await prisma.session.findUnique({where:{tokenHash:hash(raw)},include:{member:{include:{household:true}}}});
 if(!session || session.expiresAt<new Date()){if(session)await prisma.session.delete({where:{id:session.id}});return null;}
 return session.member;
}
export async function requireMember(){const m=await getCurrentMember();if(!m)throw new Error("UNAUTHORIZED");return m;}
export async function verifyPassword(hashValue:string,password:string){return bcrypt.compare(password,hashValue)}
export async function hashPassword(password:string){return bcrypt.hash(password,12)}
