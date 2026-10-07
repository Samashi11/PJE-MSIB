import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // 1. Tampilkan data awal (10 Data)
    console.log("--- STATUS AWAL ---");
    index();

    // 2. Tambahkan minimal 2 data
    const newUser1 = { nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11', email: 'data11@mail.com' };
    const newUser2 = { nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12', email: 'data12@mail.com' };
    
    store(newUser1);
    store(newUser2);

    // 3. Tampilkan data setelah penambahan (12 Data)
    console.log("\n--- SETELAH DITAMBAHKAN ---");
    index();

    // 4. Hapus data
    destroy();

    // 5. Tampilkan data setelah penghapusan
    console.log("\n--- SETELAH DIHAPUS ---");
    index();
};

main();
