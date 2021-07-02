const str = `
010-1234-5678
thesecon@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//@뒤에 있는 1개 이상의 모든 값(공백포함)읽어오기.
console.log(str.match(/(?<=@).{1,}/g))