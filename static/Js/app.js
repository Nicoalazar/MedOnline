// Encabezado
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo
        header.classList.add('hidden');
    } else {
        // Scroll hacia arriba
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

// Manejo del DOM
// document.addEventListener("DOMContentLoaded", function() {
//     const especialtiesSelect = document.getElementById("especialities");
//     const doctorsList = document.getElementById("doctors");

//     let doctors = [
//         {id: 1, nombre: 'Dr. Fernando Tamagnone', especialidad: 'Clínica Médica', os: true, disponible: true},
//         {id: 2, nombre: 'Dr. Pedro Merlo', especialidad: 'Clínica Médica', os: false, disponible: true},
//         {id: 3, nombre: 'Dr. Jorge Moreno', especialidad: 'Urología', os: true, disponible: true},
//         {id: 4, nombre: 'Dra. Daniela Gómez', especialidad: 'Alergia e Inmunología', os: true, disponible: true},
//         {id: 5, nombre: 'Dra. Mariana Moreno', especialidad: 'Atención a la mujer', os: true, disponible: true},
//         {id: 6, nombre: 'Dra. Priscila Perez', especialidad: 'Atención a la mujer', os: true, disponible: true},
//         {id: 7, nombre: 'Dr. Leonardo Silva', especialidad: 'Otorrinolaringologia', os: true, disponible: true},
//         {id: 8, nombre: 'Dr. Joaquin Rojas', especialidad: 'Gastroenterologia', os: true, disponible: true},
//         {id: 9, nombre: 'Dr. Benjamin Pina', especialidad: 'Pediatria', os: false, disponible: true},
//         {id: 10, nombre: 'Dr. Francisco Berra', especialidad: 'Cardiologia', os: true, disponible: true},
//         {id: 11, nombre: 'Dr. Luis Aranda', especialidad: 'Cardiologia', os: true, disponible: true},
//         {id: 12, nombre: 'Dr. Eduardo Camargo', especialidad: 'Cardiologia', os: true, disponible: true},
//         {id: 13, nombre: 'Dra. Mariana García', especialidad: 'Pediatria', os: false, disponible: true},
//         {id: 14, nombre: 'Dra. Laura Moreira', especialidad: 'Pediatria', os: true, disponible: true},
//         {id: 15, nombre: 'Dr. Rodrigo Loredo', especialidad: 'Cirugía Plastica y Recontrustiva', os: true, disponible: true},
//         {id: 16, nombre: 'Dra. Eugenia Perez Lloveras', especialidad: 'Clínica Médica', os: false, disponible: true},
//         {id: 17, nombre: 'Dr. Fernando Velazquez', especialidad: 'Neurología', os: true, disponible: false},
//         ]

//     const specialties = new Set(doctors.map(doctor => doctor.especialidad));
//     const allSpecialties = Array.from(specialties).sort();

//     allSpecialties.forEach(speciality => {
//         const option = document.createElement("option");
//         option.value = speciality;
//         option.textContent = speciality;
//         especialtiesSelect.appendChild(option);
//     });

//     // allSpecialities.forEach(speciality => {
//     //     const option = document.createElement("li");
//     //     option.value = speciality;
//     //     option.textContent = speciality;
//     //     specialtiesSelect.appendChild(li);
//     // });

//     especialtiesSelect.addEventListener("change", function() {
//         const selectedSpecialty = this.value;
//         const filteredDoctors = doctors.filter(doctor => doctor.especialidad === selectedSpecialty);
//         const avalableDoctors = filteredDoctors.filter(doctor => doctor.disponible);
        
//         // Clear previous results
//         doctorsList.innerHTML = '';
//         if(avalableDoctors.length > 0){
//             // Display filtered doctors
//             filteredDoctors.forEach(doctor => {
//                 const li = document.createElement("li");
//                 li.textContent = doctor.nombre;
//                 doctorsList.appendChild(li);
//             });
//         }else{
//             const li = document.createElement("li");
//             li.textContent = 'No hay doctores disponibles en este momento';
//             doctorsList.appendChild(li);
//             };
//     });
// });
