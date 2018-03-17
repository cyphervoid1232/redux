redux ใช้เมื่อ component ต้องการสื่อสารแบบ ไม่เป็นปกติ เช่น child กับ child

คู่แข่ง flux , react context , apollo หรือ relay นิยมใช้คู่กับ กราฟ QL

subscribe เป็นการ listen ใน store หากเกิดการเปลี่ยนแปลง

dispatch เรียกใช้ function reducer ในการ createStore อีกครั้ง

reduer ทำหน้าที่มรการ set ค่า state เท่านั้น

action ทำหน้าที่ในการกำหนดเงื่อนไขต่างๆ

https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1 lifecycle ของ react

reduxMiddleware เป็นตัว middleware ที่ใช้ในการตรวจสอบ action ที่ dispatch

thunk ใช้ในการส่ง function ไปเป็น action 

saga ยาก


generater funcion เติม * หน้า function เช่น function *foo(){} สามารถ return ได้หากเรียกใช้ โดยจะเรียกผ่านค่าเดิม ผ่าน yield
