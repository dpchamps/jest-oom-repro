
  describe("some-evil-spec=997", () => {
    it("evil-block-997", () => {
      window.evil_997 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  