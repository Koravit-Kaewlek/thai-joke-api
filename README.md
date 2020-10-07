# Thai Joke API

## Setup

```
npm install
```

## Set file .env

```
NODE_ENV=development
MONGODB_URI =
JWT_SECRET_KEY = SECRETE_KEY_TEST_123456
```

## Start project

```
npm start
```

### Api Endpoints

- `POST /user/login` User login. (require body username,password) (return token)
- `POST /user/register` User register. (require body username,password)

- `GET /` Get all jokes.
- `POST /` Add new joke. (Require header authorization Bearer Token)
- `GET /:id` Get joke by id.
- `DELETE /:id` Delete joke. (Require header authorization Bearer Token)
- `POST /:id/like` Like a joke.
- `POST /:id/dislike` Dislike a joke.

### Back-end Questions

1. Explain First-party cookie & Third-party cookie
```
  First-party cookie คือ จะถูกเก็บโดยตรงกับเว็บที่เราเข้าไปเยี่ยมชม เพื่อใช้ในการวิเคราะห์ข้อมูลของผู้ใช้
  Third-party cookie คือ จะถูกสร้างขึ้นโดยโดเมนอื่น เพื่อใช้ในการโฆษณาออนไลน์และจะถูกแสดงในเว็บที่ให้แสดงผลโฆษณาสินค้าต่าง ๆ
```
2. Explain CAP Theorem.
```
  C ย่อมาจาก Consistent คือ ไม่ว่าข้อมูลจะกระจายอยู่ที่ database ก้อนไหน เมื่อผู้ใช้อ่านข้อมูลจะต้องตรงกันเสมอ
  A ย่อมาจาก Available คือ ผู้ใช้สามารถอ่านหรือแก้ไขข้อมูลได้โดยต้องไม่มีปัญหา
  P ย่อมาจาก Partition Torelant คือ database สามารถทำงานต่อได้ถึงแม้ว่าจะไม่สามารถสื่อสารกับ database ก้อนอื่น
```
3. Considering two queries

```javascript
const searchIds = ['1', '2', '3', ...];

const query1 = await Product.find({ id: { $in: searchIds } });

const query2 = await Promise.all(searchIds.map(searchId => Product.find({ id: searchId })));
```

Which one is faster.
```
 query1 เร็วกว่า เพราะว่า Database มีความสามารถในการจัดการกับข้อมูลได้ดีกว่า และเปิด connection สำหรับ query แค่ครั้งเดียว
```
4. Explain XSS / SQL Injection / Man in the Middle Attack, and how to prevent each attack type.
```
XSS 
  คือ การโจมตีโดยนำ script ไปฝังไว้ใน server ของเราเพื่อไปเอาข้อมูลใน database เมื่อผู้ใช้เข้าเว็บไซต์ script จะถูกทำงานโดยการส่งข้อมูลไปให้ผู้โจมตี 
  วิธีป้องการคือ ใช้ framework ที่มีการป้องกันให้อยู่แล้วเช่น ReactJS หรือ เปิดใช้งาน Content Security Policy (CSP) คือการให้ Browser ช่วยตรวจสอบว่ามี script อันตรายถูกส่งมาด้วยหรือไม่

SQL Injection 
  คือ การโจมตีโดยการเขียนคำสั่ง sql ลงใน tag input หรือ form ต่าง ๆ พอผู้โจมตีเขียนคำสั่งลงไป ในส่วนของ code program จะมองว่าเป็น sql command ทำให้สามารถเพิ่มเงื่อนไขให้เป็นจริงเสมอ จึงทำให้สามารถดึงข้อมูลผู้ใช้ออกมาได้
  วิธีป้องกันคือ ต้องระวังข้อมูลที่เป็น text ที่มาจากฝั่ง client หรือ ไปใช้ ORM(Object-relational mapping) จะช่วยแก้ปัญหานี้ได้

Man in the Middle Attack 
  คือการโจมตีโดยการ ดักรับข้อมูลจากผู้ใช้ผ่านทาง Access Point เมื่อผู้ใช้เข้าเว็บไซต์ ผู้โจมตีจะส่งเว็บไซต์ที่ไม่ได้ถูกต้องไปให้กรอก เมื่อผู้ใช้กรอกข้อมูลทางฝั่งผู้โจมตีก็จะได้รับข้อมูลที่กรอกไปด้วย
  วิธีป้องกันคือ ตรวจสอบว่าเว็บไซต์ที่กำลังใช้งานอยู่นั้นถูกต้องแล้วหรือยัง หรือ ตรวจสอบ MAC Address หรือ IP Gateway ถ้าซ้ำกันแสดงว่ามีผู้โจมตีกำลังดักอยู่
```

5. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.
```
callback 
  ใช้เมื่อต้องการ เขียนโปรแกรมให้สามารถทำงานต่อเนื่องกัน โดยให้อยู่ในรูปแบบ synchronous 
  ไม่ควรใช้เมื่อ เรามีการทำงานหรือเรียก function callback หลายขั้นตอนเกินไป 

Promise
  ใช้เมื่อต้องการเขียนแบบ asynchronous โดยที่จะต้องรอให้ข้อมูลประมวลผลเสร็จก่อนถึงจะทำต่อได้ คำสั่งที่ใช้ร่วมคือ then, catch
  ไม่ควรใช้เมื่อ มีการใช้ then มากๆ เวลาเราใช้ catch เราจะไม่รู้ว่า error ที่เกิดมันมาจาก then ตัวไหน

async/await 
  ใช้เมื่อต้องการเขียน asynchronous ให้อยู่ในรูปแบบ synchronous ซึ่งจะทำให้การเขียนโปรแกรมนั้นอ่านง่ายขึ้นด้วย คำสั่ง await ซึ่งมาใช้ในการรอให้ข้อมูลประมวณผลเสร็จ
  ไม่ควรใช้เมื่อ function ที่เรียกใช้นั้นไม่ได้ return promise ออกมาให้
```

6. Explain how HTTP protocol works.
```
 HTTP protocol คือการรับส่งข้อมูลระหว่าง client กับ server ผ่าน internet โดยใช้ http method ซึ่งประกอบไปด้วย
 GET ในความหมายคือ การเรียกดูข้อมูลทั้งหมด
 POST ในความหมายคือ การสร้างข้อมูลใหม่โดยส่งผ่านตัว body
 PUT ในความหมายคือการ update ข้อมูลทั้งหมดที่ถูกส่งมาจาก client
 PATCH ในความหมายคือการ update ข้อมูลบางส่วนที่ถูกส่งมาจาก client
 DELETE ในความหมายคือการ ลบข้อมูล
```
