
  describe("some-evil-spec=307", () => {
    it("evil-block-307", () => {
      window.evil_307 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  