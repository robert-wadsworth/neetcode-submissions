class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const cnt = {}
        let res: number = students.length;

        for(let s of students) {
            if(!cnt[s]) {
                cnt[s] = 0;
            }
            cnt[s] += 1;
        }
        console.log(cnt);

        for(let s of sandwiches) {
            if(cnt[s] > 0) {
                cnt[s] -= 1;
                res -= 1;
            } else {
                break;
            }
        }

        return res;
    }
}
