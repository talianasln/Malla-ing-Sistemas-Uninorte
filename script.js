document.addEventListener('DOMContentLoaded', () => {
    const mallaCurricularDiv = document.getElementById('malla-curricular');

    const semesters = [
        {
            name: "Semestre 1",
            courses: [
                { id: "MAT1031", name: "MAT 1031 - Álgebra Lineal", prerequisites: [] },
                { id: "MAT1101", name: "MAT 1101 - Cálculo I - Diferencial", prerequisites: [] },
                { id: "IST0010", name: "IST 0010 - Introducción a la Ingeniería de Sistemas", prerequisites: [] },
                { id: "IST2088", name: "IST 2088 - Algoritmia y Programación I", prerequisites: [] },
                { id: "CAS3020", name: "CAS 3020 - Competencias Comunicativas I", prerequisites: [] }
            ]
        },
        {
            name: "Semestre 2",
            courses: [
                { id: "MAT1111", name: "MAT 1111 - Cálculo II - Integral", prerequisites: ["MAT1101"] },
                { id: "FIS1043", name: "FIS 1043 - Física Mecánica", prerequisites: ["MAT1101"] },
                { id: "IST2089", name: "IST 2089 - Algoritmia y Programación II", prerequisites: ["IST2088"] },
                { id: "CAS3030", name: "CAS 3030 - Competencias Comunicativas II", prerequisites: ["CAS3020"] },
                { id: "ELG1140", name: "ELG 1140 - Electiva en Historia", prerequisites: [] }
            ]
        },
        {
            name: "Semestre 3",
            courses: [
                { id: "MAT1121", name: "MAT 1121 - Cálculo III - Vectorial", prerequisites: ["MAT1111"] },
                // Nota: FIS1023 no está listada como materia, se asume que es un prerequisito general de física.
                { id: "FIS1045", name: "FIS 1045 - Física Calor-Ondas", prerequisites: ["FIS1023"] }, //
                { id: "IST2101", name: "IST 2101 - Programación Orientada a Objetos", prerequisites: ["IST2089"] }, //
                { id: "IST4031_1", name: "IST 4031 - Estructura de Datos I", prerequisites: ["IST2089"] }, // (Cambié el ID para diferenciarlo de "Estructura de Datos II")
                { id: "ELG1130", name: "ELG 1130 - Electiva en Humanidades", prerequisites: [] } //
            ]
        },
        {
            name: "Semestre 4",
            courses: [
                { id: "MAT4011", name: "MAT 4011 - Ecuaciones Diferenciales", prerequisites: ["MAT1111"] }, //
                // Nota: FIS1023 no está listada, se asume que es un prerequisito general de física.
                { id: "FIS1043_ELEC", name: "FIS 1043 - Física Electricidad", prerequisites: ["FIS1023", "MAT1111"] }, // (Cambié el ID para diferenciarlo de "Física Mecánica")
                { id: "ELG1150", name: "ELG 1150 - Electiva en Ciencias de la Vida", prerequisites: [] }, //
                // Nota: IST4021 no está listada, se asume un error tipográfico y se usa IST4031_1
                { id: "IST4031_2", name: "IST 4031 - Estructura de Datos II", prerequisites: ["IST4031_1"] }, // (Asumiendo que IST4021 era un typo y era IST4031_1)
                { id: "MAT4021", name: "MAT 4021 - Matemáticas Discretas", prerequisites: [] } //
            ]
        },
        {
            name: "Semestre 5",
            courses: [
                { id: "EST7042", name: "EST 7042 - Análisis de Datos en Ing I", prerequisites: ["MAT1111"] }, //
                { id: "IST4310", name: "IST 4310 - Algoritmia y Complejidad", prerequisites: ["IST4031_1"] }, //
                { id: "IST7072", name: "IST 7072 - Diseño Digital", prerequisites: ["MAT4021"] }, //
                { id: "ELG0007", name: "ELG 0007 - Electiva en Ciencias Básicas", prerequisites: [] }, //
                { id: "IST4330", name: "IST 4330 - Estructuras Discretas", prerequisites: ["MAT4021", "IST4031_1"] }, //
                // Materias especiales que se cursan en el 5to semestre
                { id: "IST4370", name: "IST 4370 - Seminario de Carrera I", prerequisites: [] }, //
                // Nota: FIS1023, FIS1033, FIS1043 (de nuevo, se asumen IDs válidos si existen como materias separadas)
                { id: "IIN4310_1", name: "IIN 4310 - Examen Comprensivo I", prerequisites: ["MAT4011", "MAT1121", "FIS1023", "FIS1033", "FIS1043"] } // (Cambié ID para diferenciar de Comprensivo II)
            ]
        },
        {
            name: "Semestre 6",
            courses: [
                { id: "IST4360", name: "IST 4360 - Soluciones Computacionales a Problemas de Ingeniería", prerequisites: ["MAT4011"] }, //
                { id: "IST7111", name: "IST 7111 - Bases de Datos", prerequisites: ["IST4310"] }, //
                { id: "IST7191", name: "IST 7191 - Redes de Computación", prerequisites: [] }, //
                { id: "IST4012", name: "IST 4012 - Estructura del Computador I", prerequisites: ["IST7072"] }, //
                { id: "ELG0008", name: "ELG 0008 - Electiva Básica Profesional", prerequisites: [] } //
            ]
        },
        {
            name: "Semestre 7",
            courses: [
                { id: "IST7420", name: "IST 7420 - Optimización", prerequisites: ["IST4360", "EST7042"] }, //
                { id: "IST7121", name: "IST 7121 - Diseño de Software I", prerequisites: ["IST7111"] }, //
                { id: "IST70811", name: "IST 70811 - Sistemas Operativos", prerequisites: ["IST4031_1", "IST4012"] }, //
                { id: "IST7102", name: "IST 7102 - Estructura del Computador II", prerequisites: ["IST4012"] }, //
                { id: "ELG1170", name: "ELG 1170 - Electiva en Ética", prerequisites: [] } //
            ]
        },
        {
            name: "Semestre 8",
            courses: [
                { id: "IST7122", name: "IST 7122 - Diseño de Software II", prerequisites: ["IST7121"] }, //
                // Nota: IST7191S no está listada, se asume un typo y se usa IST7191
                { id: "IST1302", name: "IST 1302 - Electiva en Redes", prerequisites: ["IST7191"] }, // (Asumiendo que IST7191S era un typo)
                // Nota: IST2110 no está listada, se asume que es un prerrequisito válido.
                { id: "IST7410", name: "IST 7410 - Compiladores", prerequisites: ["IST2110", "IST4031_1"] }, //
                { id: "ELG1301", name: "ELG 1301 - Electiva Profesional II", prerequisites: [] }, //
                { id: "ELG1190", name: "ELG 1190 - Electiva en Ciencias Sociales", prerequisites: [] }, //
                { id: "ELG8400", name: "ELG 8400 - Electiva en Innovación, Dilo. y Sociedad", prerequisites: [] } //
            ]
        },
        {
            name: "Semestre 9",
            courses: [
                { id: "ELG1306_A", name: "ELG 1306 - Electiva Profesional III", prerequisites: [] }, // (Cambié ID por posible duplicado)
                { id: "ELG1303", name: "ELG 1303 - Electiva en Ciencias de la Computación", prerequisites: [] }, //
                { id: "ELP4030", name: "ELP 4030 - Electiva Formación Complementaria I", prerequisites: [] }, //
                { id: "ELG1160", name: "ELG 1160 - Electiva en Filosofía", prerequisites: [] }, //
                { id: "ELG1304", name: "ELG 1304 - Electiva Gestión Informática", prerequisites: [] }, //
                // Materia especial que se cursa en el 9no semestre
                { id: "IIN4310_2", name: "IIN 4310 - Examen Comprensivo II", prerequisites: [] } // (Cambié ID para diferenciar de Comprensivo I)
            ]
        },
        {
            name: "Semestre 10",
            courses: [
                { id: "IST4380", name: "IST 4380 - Seminario de Carrera II", prerequisites: ["IST4370"] }, //
                { id: "INV7363", name: "INV 7363 - Proyecto Final", prerequisites: ["IST7122"] }, //
                { id: "ELG1180", name: "ELG 1180 - Electiva en Estudios del Caribe", prerequisites: [] }, //
                { id: "ELG1306_B", name: "ELG 1306 Electiva Profesional III", prerequisites: [] } // (Cambié ID por posible duplicado)
            ]
        }
    ];

    // Se eliminó 'specialCourses' separado y se integraron directamente en los semestres correspondientes.

    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || [];

    function renderMalla() {
        mallaCurricularDiv.innerHTML = ''; // Limpiar el contenido anterior

        semesters.forEach(semestre => {
            const semestreDiv = document.createElement('div');
            semestreDiv.classList.add('semestre');
            semestreDiv.innerHTML = `<h2>${semestre.name}</h2>`;

            semestre.courses.forEach(course => {
