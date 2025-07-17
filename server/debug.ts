import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function debugModels() {
  console.log("Available Prisma models:");
  console.log(Object.keys(prisma));
  
  // Test each model individually
  const models = ['user', 'team', 'project', 'task', 'comment', 'attachment', 'taskAssignment', 'projectTeam'];
  
  for (const modelName of models) {
    const model = (prisma as any)[modelName];
    if (model) {
      console.log(`✅ Model '${modelName}' exists`);
      console.log(`   Methods: ${Object.getOwnPropertyNames(model)}`);
    } else {
      console.log(`❌ Model '${modelName}' NOT found`);
    }
  }
}

debugModels()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());