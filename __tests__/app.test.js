const request = require('supertest');
const app = require('../server');

// decribe  is used for Organization muiltiple files 
describe("API basic tests",()=>{
  // it  represent one single test 
   it("GET / should return health message",async()=>{
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    // expect is used to write expectations 
    expect(res.body).toHaveProperty("message");
   });
   it("GET /api/users should return  users array",async()=>{
     const res = await request(app).get("/api/users");
     expect(res.statusCode).toBe(200);
     expect(Array.isArray(res.body.users)).toBe(true);
   });
   it("POST /api/users should create a user",async()=>{
    const res = await request(app).post("/api/users").send({ name: "Test User", email: "test@example.com" });
    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty("id");
    expect(res.body.user.email).toBe("test@example.com");
   });
});