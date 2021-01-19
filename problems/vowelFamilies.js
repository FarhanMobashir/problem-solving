/*

? Problem Statement : Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.

* Input : ["toe", "ocelot", "maniac"] -> Output : ["toe", "ocelot"]
* Input : ["many", "carriage", "emit", "apricot", "animal"] -> Output : ["many"]
* Input : ["hoops", "chuff", "bot", "bottom"] -> Output : ["hoops", "bot", "bottom"]

todo 1. Coming Up with Logic

? --> Breaking the problem
- finding first vowel in the string
- if any other vowel found skip that string
- if same vowel is found again in that string or no any other vowel is found keep that string

? --> Pseuducode
- split the elements if the array
- pick each element and find the first vowel
*/
