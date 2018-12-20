const router = require("koa-router")();
const querystring = require("querystring");
const {
  sql_add,
  sql_delete,
  sql_query,
  sql_update
} = require("../public/mysql");

router.get("/query", async (ctx, next) => {
  console.log(ctx.request.query);
  console.log(ctx.params);
  let result = await sql_query();
  ctx.body = JSON.stringify({ data: JSON.parse(result) });
});
router.post("/add", async (ctx, next) => {
  let { s_name, s_math, s_english } = ctx.request.body;
  let add = await sql_add(s_name, s_math, s_english);
  if (!!add) var result = await sql_query();
  ctx.body = JSON.stringify({ data: JSON.parse(result) });
});

router.delete("/delete", async (ctx, next) => {
  let { id } = JSON.parse(JSON.stringify(querystring.parse(ctx.request.body)));
  let _delete = await sql_delete(id);
  if (!!_delete) var result = await sql_query();
  ctx.body = JSON.stringify({ data: JSON.parse(result) });
});
router.put("/updata", async (ctx, next) => {
  let { id, s_name, s_math, s_english } = JSON.parse(
    JSON.stringify(ctx.request.body)
  );
  let update = await sql_update(id, s_name, s_math, s_english);
  if (!!update) var result = await sql_query();
  ctx.body = JSON.stringify({ data: JSON.parse(result) });
});

module.exports = router;
