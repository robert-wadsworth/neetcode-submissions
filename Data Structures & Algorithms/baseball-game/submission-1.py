class Solution:
    def calPoints(self, operations: List[str]) -> int:
        scores = []

        for op in operations:
            if op == '+':
                [score1, score2] = scores[-2:]
                scores.append(score1 + score2)
            elif op == 'D':
                scores.append(scores[-1] * 2)
            elif op == 'C':
                scores.pop()
            else:
                scores.append(int(op))

        return sum(scores)


        