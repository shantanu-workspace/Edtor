import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
    imageURL: v.optional(v.string()),  //profile picture

    plan:v.union(v.literal("free"), v.literal("pro")),

    //Usage tracking for plan limits
    projectsUsed: v.number(),  //current project count
    exportsThisMonth: v.number(), //Monthly export count
    
    createdAt: v.number(),
    lastActiveAt: v.number(),
  })
  .index("by_token", ["tokenIdentifier"])
  .index("by_email", ["email"])
  .searchIndex("search_name", {searchField: "name"})
  .searchIndex("search_email", {searchField: "email"}) //for admin search
});
