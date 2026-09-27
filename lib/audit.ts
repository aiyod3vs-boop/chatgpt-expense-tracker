import { prisma } from "./prisma";
export async function audit(householdId:string,memberId:string|undefined,action:string,entity:string,entityId?:string,metadata?:unknown){
 try{await prisma.auditLog.create({data:{householdId,memberId,action,entity,entityId,metadata:metadata as any}})}catch{}
}
