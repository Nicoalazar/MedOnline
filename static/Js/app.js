let doctors = [
    {id: 1, nombre: 'Dr. Fernando Tamagnone', especialidad: 'Clínica Médica', os: true},
    {id: 2, nombre: 'Dr. Pedro Merlo', especialidad: 'Clínica Médica', os: false},
    {id: 3, nombre: 'Dr. Jorge Moreno', especialidad: 'Urología', os: true},
    {id: 4, nombre: 'Dra. Daniela Gómez', especialidad: 'Alergia e Inmunología', os: true},
    {id: 5, nombre: 'Dra. Mariana Moreno', especialidad: 'Atención a la mujer', os: true},
    {id: 6, nombre: 'Dra. Priscila Perez', especialidad: 'Atención a la mujer', os: true},
    {id: 7, nombre: 'Dr. Leonardo Silva', especialidad: 'Otorrinolaringologia', os: true},
    {id: 8, nombre: 'Dr. Joaquin Rojas', especialidad: 'Gastroenterologia', os: true},
    {id: 9, nombre: 'Dr. Benjamin Pina', especialidad: 'Pediatria', os: false},
    {id: 10, nombre: 'Dr. Francisco Berra', especialidad: 'Cardiologia', os: true},
    {id: 11, nombre: 'Dr. Luis Aranda', especialidad: 'Cardiologia', os: true},
    {id: 12, nombre: 'Dr. Eduardo Camargo', especialidad: 'Cardiologia', os: true},
    {id: 13, nombre: 'Dra. Mariana García', especialidad: 'Pediatria', os: false},
    {id: 14, nombre: 'Dra. Laura Moreira', especialidad: 'Pediatria', os: true},
    {id: 15, nombre: 'Dr. Rodrigo Loredo', especialidad: 'Cirugía Plastica y Recontrustiva', os: true},
    {id: 16, nombre: 'Dra. Eugenia Perez Lloveras', especialidad: 'Clínica Médica', os: false}
    ]

let specialties = new Set(doctors.map(doctor => doctor.especialidad));

specialties = Array.from(specialties);

const selectEspecialidades = document.getElementById("especialities");

specialties.forEach(especialidad => {
    const option = document.createElement("option");
    option.value = especialidad;
    option.textContent = especialidad;
    selectEspecialidades.appendChild(option);
});

specialties.forEach(especialidad => {
    const option = document.createElement("li");
    option.value = especialidad;
    option.textContent = especialidad;
    selectEspecialidades.appendChild(li);
});
