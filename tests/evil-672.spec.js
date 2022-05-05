
  describe("some-evil-spec=672", () => {
    it("evil-block-672", () => {
      window.evil_672 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  