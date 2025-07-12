document.addEventListener('DOMContentLoaded', () => {
    const mallaCurricularDiv = document.getElementById('malla-curricular');

    const semesters = [
        {
            name: "Semestre 1",
            courses: [
                [cite_start]{ id: "MAT1031", name: "MAT 1031 - Álgebra Lineal", prerequisites: [] }, // [cite: 2]
                [cite_start]{ id: "MAT1101", name: "MAT 1101 - Cálculo I - Diferencial", prerequisites: [] }, // [cite: 2]
                [cite_start]{ id: "IST0010", name: "IST 0010 - Introducción a la Ingeniería de Sistemas", prerequisites: [] }, // [cite: 2]
                [cite_start]{ id: "IST2088", name: "IST 2088 - Algoritmia y Programación I", prerequisites: [] }, // [cite: 2]
                [cite_start]{ id: "CAS3020", name: "CAS 3020 - Competencias Comunicativas I", prerequisites: [] } // [cite: 2]
            ]
        },
        {
            name: "Semestre 2",
            courses: [
                [cite_start]{ id: "MAT1111", name: "MAT 1111 - Cálculo II - Integral", prerequisites: ["MAT1101"] }, // [cite: 6, 7]
                [cite_start]{ id: "FIS1043", name: "FIS 1043 - Física Mecánica", prerequisites: ["MAT1101"] }, // [cite: 8, 9]
                [cite_start]{ id: "IST2089", name: "IST 2089 - Algoritmia y Programación II", prerequisites: ["IST2088"] }, // [cite: 10, 11]
                [cite_start]{ id: "CAS3030", name: "CAS 3030 - Competencias Comunicativas II", prerequisites: ["CAS3020"] }, // [cite: 12, 13]
                [cite_start]{ id: "ELG1140", name: "ELG 1140 - Electiva en Historia", prerequisites: [] } // [cite: 14, 15]
            ]
        },
        {
            name: "Semestre 3",
            courses: [
                [cite_start]{ id: "MAT1121", name: "MAT 1121 - Cálculo III - Vectorial", prerequisites: ["MAT1111"] }, // [cite: 17]
                [cite_start]{ id: "FIS1045", name: "FIS 1045 - Física Calor-Ondas", prerequisites: ["FIS1023"] }, // [cite: 17] (FIS1023 es un prerrequisito del PDF)
                [cite_start]{ id: "IST2101", name: "IST 2101 - Programación Orientada a Objetos", prerequisites: ["IST2089"] }, // [cite: 17]
                [cite_start]{ id: "IST4031_1", name: "IST 4031 - Estructura de Datos I", prerequisites: ["IST2089"] }, // [cite: 17] (Se añadió "_1" para diferenciarlo de Estructura de Datos II)
                [cite_start]{ id: "ELG1130", name: "ELG 1130 - Electiva en Humanidades", prerequisites: [] } // [cite: 18, 19]
            ]
        },
        {
            name: "Semestre 4",
            courses: [
                [cite_start]{ id: "MAT4011", name: "MAT 4011 - Ecuaciones Diferenciales", prerequisites: ["MAT1111"] }, // [cite: 22, 28]
                [cite_start]{ id: "FIS1043_ELEC", name: "FIS 1043 - Física Electricidad", prerequisites: ["FIS1023", "MAT1111"] }, // [cite: 23, 29] (Se añadió "_ELEC" para diferenciarlo de Física Mecánica)
                [cite_start]{ id: "ELG1150", name: "ELG 1150 - Electiva en Ciencias de la Vida", prerequisites: [] }, // [cite: 24, 30]
                [cite_start]{ id: "IST4031_2", name: "IST 4031 - Estructura de Datos II", prerequisites: ["IST4031_1"] }, // [cite: 25, 31] (Asumiendo que "IST 4021" en el PDF era un error tipográfico y se refería a IST4031_1)
                [cite_start]{ id: "MAT4021", name: "MAT 4021 - Matemáticas Discretas", prerequisites: [] } // [cite: 26, 32]
            ]
        },
        {
            name: "Semestre 5",
            courses: [
                [cite_start]{ id: "EST7042", name: "EST 7042 - Análisis de Datos en Ing I", prerequisites: ["MAT1111"] }, // [cite: 36, 37]
                [cite_start]{ id: "IST4310", name: "IST 4310 - Algoritmia y Complejidad", prerequisites: ["IST4031_1"] }, // [cite: 38, 39]
                [cite_start]{ id: "IST7072", name: "IST 7072 - Diseño Digital", prerequisites: ["MAT4021"] }, // [cite: 40, 41]
                [cite_start]{ id: "ELG0007", name: "ELG 0007 - Electiva en Ciencias Básicas", prerequisites: [] }, // [cite: 42, 43]
                [cite_start]{ id: "IST4330", name: "IST 4330 - Estructuras Discretas", prerequisites: ["MAT4021", "IST4031_1"] }, // [cite: 44, 45]
                // Materias especiales que se cursan en el 5to semestre (según el PDF)
                [cite_start]{ id: "IST4370", name: "IST 4370 - Seminario de Carrera I", prerequisites: [] }, // [cite: 104]
                [cite_start]{ id: "IIN4310_1", name: "IIN 4310 - Examen Comprensivo I", prerequisites: ["MAT4011", "MAT1121", "FIS1023", "FIS1033", "FIS1043"] } // [cite: 101, 103] (Se añadió "_1" para diferenciar de Examen Comprensivo II)
            ]
        },
        {
            name: "Semestre 6",
            courses: [
                [cite_start]{ id: "IST4360", name: "IST 4360 - Soluciones Computacionales a Problemas de Ingeniería", prerequisites: ["MAT4011"] }, // [cite: 48, 54]
                [cite_start]{ id: "IST7111", name: "IST 7111 - Bases de Datos", prerequisites: ["IST4310"] }, // [cite: 49, 55]
                [cite_start]{ id: "IST7191", name: "IST 7191 - Redes de Computación", prerequisites: [] }, // [cite: 50, 56]
                [cite_start]{ id: "IST4012", name: "IST 4012 - Estructura del Computador I", prerequisites: ["IST7072"] }, // [cite: 51, 57]
                [cite_start]{ id: "ELG0008", name: "ELG 0008 - Electiva Básica Profesional", prerequisites: [] } // [cite: 52, 58]
            ]
        },
        {
            name: "Semestre 7",
            courses: [
                [cite_start]{ id: "IST7420", name: "IST 7420 - Optimización", prerequisites: ["IST4360", "EST7042"] }, // [cite: 61, 65]
                [cite_start]{ id: "IST7121", name: "IST 7121 - Diseño de Software I", prerequisites: ["IST7111"] }, // [cite: 62, 66]
                [cite_start]{ id: "IST70811", name: "IST 70811 - Sistemas Operativos", prerequisites: ["IST4031_1", "IST4012"] }, // [cite: 63, 67]
                [cite_start]{ id: "IST7102", name: "IST 7102 - Estructura del Computador II", prerequisites: ["IST4012"] }, // [cite: 68]
                [cite_start]{ id: "ELG1170", name: "ELG 1170 - Electiva en Ética", prerequisites: [] } // [cite: 69, 71]
            ]
        },
        {
            name: "Semestre 8",
            courses: [
                [cite_start]{ id: "IST7122", name: "IST 7122 - Diseño de Software II", prerequisites: ["IST7121"] }, // [cite: 72]
                [cite_start]{ id: "IST1302", name: "IST 1302 - Electiva en Redes", prerequisites: ["IST7191"] }, // [cite: 72] (Asumiendo que "IST 7191S!" era un error tipográfico y se refería a IST7191)
                [cite_start]{ id: "IST7410", name: "IST 7410 - Compiladores", prerequisites: ["IST2110", "IST4031_1"] }, // [cite: 72] (IST2110 es un prerrequisito del PDF)
                [cite_start]{ id: "ELG1301", name: "ELG 1301 - Electiva Profesional II", prerequisites: [] }, // [cite: 72, 73]
                [cite_start]{ id: "ELG1190", name: "ELG 1190 - Electiva en Ciencias Sociales", prerequisites: [] }, // [cite: 74]
                [cite_start]{ id: "ELG8400", name: "ELG 8400 - Electiva en Innovación, Dilo. y Sociedad", prerequisites: [] } // [cite: 75]
            ]
        },
        {
            name: "Semestre 9",
            courses: [
                [cite_start]{ id: "ELG1306_A", name: "ELG 1306 - Electiva Profesional III", prerequisites: [] }, // [cite: 79, 80] (Se añadió "_A" para diferenciar de la del semestre 10)
                [cite_start]{ id: "ELG1303", name: "ELG 1303 - Electiva en Ciencias de la Computación", prerequisites: [] }, // [cite: 81, 82]
                [cite_start]{ id: "ELP4030", name: "ELP 4030 - Electiva Formación Complementaria I", prerequisites: [] }, // [cite: 83, 84]
                [cite_start]{ id: "ELG1160", name: "ELG 1160 - Electiva en Filosofía", prerequisites: [] }, // [cite: 85, 87]
                [cite_start]{ id: "ELG1304", name: "ELG 1304 - Electiva Gestión Informática", prerequisites: [] }, // [cite: 86, 88]
                [cite_start]{ id: "IIN4310_2", name: "IIN 4310 - Examen Comprensivo II", prerequisites: [] } // [cite: 107] (Se añadió "_2" para diferenciar de Examen Comprensivo I)
            ]
        },
        {
            name: "Semestre 10",
            courses: [
                [cite_start]{ id: "IST4380", name: "IST 4380 - Seminario de Carrera II", prerequisites: ["IST4370"] }, // [cite: 92, 93, 105]
                [cite_start]{ id: "INV7363", name: "INV 7363 - Proyecto Final", prerequisites: ["IST7122"] }, // [cite: 94, 95, 105]
                [cite_start]{ id: "ELG1180", name: "ELG 1180 - Electiva en Estudios del Caribe", prerequisites: [] }, // [cite: 96, 97]
                [cite_start]{ id: "ELG1306_B", name: "ELG 1306 Electiva Profesional III", prerequisites: [] } // [cite: 98, 99] (Se añadió "_B" para diferenciar de la del semestre 9)
            ]
        }
    ];

    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || [];

    function renderMalla() {
        mallaCurricularDiv.innerHTML = ''; // Limpiar el contenido anterior

        semesters.forEach(semestre => {
            const semestreDiv = document.createElement('div');
            semestreDiv.classList.add('semestre');
            semestreDiv.innerHTML = `<h2>${semestre.name}</h2>`;

            semestre.courses.forEach(course => {
                const materiaDiv = document.createElement('div');
                materiaDiv.classList.add('materia');
                materiaDiv.setAttribute('data-course-id', course.id);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = course.id;
                checkbox.checked = approvedCourses.includes(course.id);
                checkbox.disabled = !canTakeCourse(course); // Deshabilita si los prerrequisitos no se cumplen

                const label = document.createElement('label');
                label.htmlFor = course.id;
                label.textContent = course.name;

                materiaDiv.appendChild(checkbox);
                materiaDiv.appendChild(label);
                semestreDiv.appendChild(materiaDiv);

                if (checkbox.checked) {
                    materiaDiv.classList.add('aprobada');
                } else if (checkbox.disabled) {
                    materiaDiv.classList.add('bloqueada');
                }

                checkbox.addEventListener('change', (event) => {
                    if (event.target.checked) {
                        approvedCourses.push(course.id);
                        materiaDiv.classList.add('aprobada');
                    } else {
                        approvedCourses = approvedCourses.filter(id => id !== course.id);
                        materiaDiv.classList.remove('aprobada');
                    }
                    localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
                    renderMalla(); // Volver a renderizar para actualizar los cursos desbloqueados
                });
            });
            mallaCurricularDiv.appendChild(semestreDiv);
        });
    }

    function canTakeCourse(course) {
        return course.prerequisites.every(prereq => approvedCourses.includes(prereq));
    }

    renderMalla();
});
