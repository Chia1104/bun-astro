import { APIContext } from "astro";

export async function GET(ctx: APIContext) {
  const getRuntime = () => {
    try {
      return Bun.env.PUBLIC_RUNTIME_ENV ?? "ENV NOT SET";
    } catch (e: any) {
      return `Node (ERROR: ${e.message})`;
    }
  };
  const getPassword = async () => {
    try {
      const password = "super-secure-pa$$word";
      return await Bun.password.hash(password);
    } catch (e: any) {
      return `ERROR: ${e.message}`;
    }
  };

  return new Response(
    JSON.stringify({
      serverRuntime: getRuntime(),
      hashedPassword: await getPassword(),
    })
  );
}
