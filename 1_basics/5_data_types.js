/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이있다.
 * 
 * - Primitive Type
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

/**
 * Number 타입
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof(age));
console.log(typeof(tempature));
console.log(typeof(pi));
console.log('----------------');

const inf = Infinity;
const ninf = -Infinity;

console.log(typeof(inf));
console.log(typeof(ninf));
console.log('----------------');

/**
 * String 타입
 */
const codeFactory = '코드팩토리';
console.log(typeof(codeFactory));

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Charater
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면된다.
 */

const iveWonYoung = `아이브
장원영`;
console.log(iveWonYoung);
console.log(typeof(iveWonYoung));

console.log(`${ive} 안유진`);

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof(isTrue));
console.log(typeof(isFalse));