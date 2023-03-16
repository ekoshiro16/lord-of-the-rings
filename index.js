/*
Middle Earth is about to go to war over the One Ring! The forces of good need some sort of way to combat the many forces of evil. As the resident web developer of the Council of Elrond, you luckily have a clever plan to help out. 

You've noticed that there are many types of people who have come to fight Sauron's armies, and some are stronger than others. In general, you've noticed the groups with the most people and strongest powers tend to fight the best, so you figure - what if you placed the most powerful forces in front? For example, Frodo, who holds the One Ring, holds power on the same level as Sauron when he wears the one ring, so why not put him right in front? This military plan is definitely foolproof. 

Write an algorithm that accepts 1 parameter:
    1) An array of objects, where each object represents a group fighting for the forces of Good. Each object will contain 3 keys:
        a) The name of the group
        b) The population of the group
        c) The strength of the group's powers

A group's strategical power level is equivalent to the population of the group added to the strength of the group's powers.

Your algorithm should return a sorted array where the most "powerful" groups are in the beginning of the array, and the least powerful groups are at the end of the array 
AND 
adds a new object to the end of the sorted array, which will contain two keys:
    1) totalNumOfForces, an integer representing the total population of the forces of Good
    2) totalGroupStrength, an integer representing the total group strength of the forces of Good

For example: 
If you were given an input like:
[
    {
        name: 'Hobbits',
        population: 20,
        groupStrength: 1
    },
    {
        name: 'Men',
        population: 100,
        groupStrength: 50
    },
    {
        name: 'Wizards',
        population: 4,
        groupStrength: 200
    },
    {
        name: 'Elves',
        population: 50,
        groupStrength: 150
    },
    {
        name: 'the Fellowship of the Ring',
        population: 9,
        groupStrength: 450
    }
]

Your function would return the following array (some key-values omitted for conciseness):
[
    { name: 'the Fellowship of the Ring' }, 
    { name: 'Wizards' }, 
    { name: 'Elves' }, 
    { name: 'Humans' }, 
    { name: 'Hobbits' }, 
    { totalNumOfForces: 183, totalGroupStrength: 851 }
]

Because the Fellowship of the Ring is the most powerful (450 + 9 power level), while the Hobbits are the least powerful (20 + 1 power level). Finally, the last element represents the total stats of the forces of Good.
*/

// Write your code below: 