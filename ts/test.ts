function foo(correct: string, wrong: string) {
    let res: string[] = [];

    for (let i = 0; i < correct.length; i++) {
        if (correct.charAt(i) != wrong.charAt(i)) {
            if (res.includes(correct.charAt(i))) {
                continue;
            } else {
                res.push(correct.charAt(i));
            }
        }
    }

    return res;
}

