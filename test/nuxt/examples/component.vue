<script setup lang="ts">
interface Props {
    message?: string;
}

// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps<Props>();
const emits = defineEmits<{
    emit: [message: string];
}>();
const $style = useCssModule();

// eslint-disable-next-line unused-imports/no-unused-vars
function test(): string {
    return "Sample function return";
};

function click(): void {
    emits("emit", "Sample click emit message");
}

onMounted(() => {
    emits("emit", "Sample emit message");
});
</script>

<template>
    <div>
        <button :class="$style.sampleClass" @click="click()">
            Sample template message
        </button>
    </div>
</template>

<style module lang="scss">
.sampleClass {
    all: initial;
}
</style>
