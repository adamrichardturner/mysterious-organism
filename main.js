// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}
// Factory function that returns specimen objects containing
// DNA bases.
const pAequorFactory = (num, base) => {
    return {
        specimenNum: num,
        dna: base,
        mutate() {
            // Random location on DNA
            let i = Math.floor(Math.random() * this.dna.length);
            // The target base to change
            let oldBase = this.dna[i];
            // Swapping the oldBase with newBase
            let dnaBases = ['A', 'T', 'C', 'G'];
            dnaBases.splice(dnaBases.indexOf(oldBase), 1);
            let mutatedBase = dnaBases[Math.floor(Math.random() * 3)];
            return this.dna.splice(i, 1, mutatedBase);
        },
        compareDNA(pAequor) {
            let source = pAequor.dna;
            let target = this.dna;
            let matched = [];
            console.log('Source: ' + source + ' \n');
            console.log('Target: ' + target + ' \n');
            for (let i in source) {
                if (source[i] === target[i]) {
                    matched.push(source[i]);
                }
            }
            let percent = (matched.length / (source.length + target.length) * 100).toFixed(2);
            return `\nspecimen #1 and specimen #2 have ${percent}% DNA in common`;
        },
        willLikelySurvive() {
            let gdDna = [];
            let dna = this.dna;
            for(let i in dna) {
                if(dna[i] === 'C') {
                    gdDna.push(dna[i]);
                } else if (dna[i] === 'G') {
                    gdDna.push(dna[i]);
                }
            }
            return gdDna.length >= 9;
        }
    }
}
const test1 = pAequorFactory(2, mockUpStrand());
const test2 = pAequorFactory(3, mockUpStrand());
const makeSpecimens = num => {
    const arr = [];
    for(let i=0; i < num; i++) {
        arr.push(pAequorFactory(i, mockUpStrand()))
    }
    return arr;
}

const testArray = makeSpecimens(30);