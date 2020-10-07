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
  ตอบ
```

5. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.
```
  ตอบ
```

6. Explain how HTTP protocol works.
```
  ตอบ
```
