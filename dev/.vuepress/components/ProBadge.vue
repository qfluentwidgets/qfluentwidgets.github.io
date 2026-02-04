<template>
  <span class="pro-badge">Pro</span>
</template>

<script>
export default {
  name: 'ProBadge'
}
</script>

<style scoped>
.pro-badge {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.5;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 0.25rem;
  vertical-align: middle;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

html.dark .pro-badge {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
}
</style>
