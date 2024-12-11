
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  createProject: protectedProcedure.input().mutation(({ctx,input}) => {
    ctx.user.userId
  console.log("hiiii");
  return true
  
  })
})