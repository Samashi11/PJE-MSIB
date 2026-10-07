import users from "./data.mjs";

const index = () => {
    console.log("\n=== DAFTAR USERS ===");
    // Menampilkan data menggunakan map()
    users.map((user, i) => {
        console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

const store = (user) => {
    // Menambahkan data pada proses push
    users.push(user);
    console.log(`\n[INFO] Data '${user.nama}' berhasil ditambahkan.`);
};

const destroy = () => {
    // Menghapus data terakhir (karena tidak ada parameter indeks spesifik di instruksi)
    const deleted = users.pop();
    if (deleted) {
        console.log(`\n[INFO] Data '${deleted.nama}' berhasil dihapus.`);
    } else {
        console.log(`\n[INFO] Tidak ada data yang bisa dihapus.`);
    }
};

export { index, store, destroy };
