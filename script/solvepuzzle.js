let solutions = {}

const isCorrect = sol => {
    for (let i = 0; i < sol.length; i++)
        if (sol[i] != i) return false;
    return true;
}
const backtrack = (sol, isVisited, i, j, count) => {
    if (isVisited[i][j]) return;
    else isVisited[i][j] = true;

    if (isCorrect(sol)) {
        if (!solutions[count]) solutions[count] = [];
        solutions[count].push(sol);
    }
    if (i-1 >= 0) {
        // swap
        let t = sol[i][j];
        sol[i][j] = sol[i-1][j];
        sol[i-1][j] = t;
        return backtrack(sol, isVisited, i-1, j, count+1);
    }
    if (i+1 < sol.length) {
        let t = sol[i][j];
        sol[i][j] = sol[i+1][j];
        sol[i+1][j] = t;
        return backtrack(sol, isVisited, i+1, j, count+1);
    }
    if (j-1 >= 0) {
        let t = sol[i][j];
        sol[i][j] = sol[i][j-1];
        sol[i][j-1] = t;
        return backtrack(sol, isVisited, i, j-1, count+1);
    }
    if (j+1 < sol.length) {
        let t = sol[i][j];
        sol[i][j] = sol[i][j+1];
        sol[i][j+1] = t;
        return backtrack(sol, isVisited, i, j+1, count+1);
    }
}
