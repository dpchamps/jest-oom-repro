
  describe("some-evil-spec=316", () => {
    it("evil-block-316", () => {
      window.evil_316 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  