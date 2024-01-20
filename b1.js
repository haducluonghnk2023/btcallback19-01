function tuDaiNhat(chuoi) {
    let tuDaiNhat = '';
    let doDaiTuDaiNhat = 0;
    const cacTu = chuoi.split(' ');
    for (let i = 0; i < cacTu.length; i++) {
        const tuHienTai = cacTu[i];
        if (tuHienTai.length > doDaiTuDaiNhat) {
            tuDaiNhat = tuHienTai;
            doDaiTuDaiNhat = tuHienTai.length;
        }
    }
    return [tuDaiNhat,doDaiTuDaiNhat];
}
const chuoi = "The quick brown fox jumped over the lazy dog.";
console.log(tuDaiNhat(chuoi));

