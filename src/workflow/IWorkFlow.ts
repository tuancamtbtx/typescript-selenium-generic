export default interface IWorkFlow {
    loadConfig(): void
    loadDriver(): void
    execute(): void
}