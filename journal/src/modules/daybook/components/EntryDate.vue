<template>
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-5">{{ month }}</span>
        <span class="mx-2 fw-light">{{ yearDay }}</span>
    </div>
</template>

<script>

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    computed: {
        day() {
            const date = new Date(this.entry.date)
            return date.getDate()
        },
        month() {
            const date = new Date(this.entry.date)
            return months[date.getMonth()]
        },
        yearDay() {
            const date = new Date(this.entry.date)
            return `${date.getFullYear()}, ${days[date.getDay()]}`
        }
    }
}
</script>

<style>

</style>