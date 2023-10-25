<script setup lang="ts">
import TicketSearchCard from '@/components/ticket/TicketSearchCard.vue'
import TicketShowCard from '@/components/ticket/TicketShowCard.vue'
</script>

<template>
    <div class="ticket-view">
        <div style="flex-direction: column" class="column">
            <TicketSearchCard/>
        </div>

        <div style="flex-direction: column" class="column">
            <TicketShowCard/>
        </div>
    </div>
</template>
