
  describe("some-evil-spec=817", () => {
    it("evil-block-817", () => {
      window.evil_817 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  