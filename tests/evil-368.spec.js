
  describe("some-evil-spec=368", () => {
    it("evil-block-368", () => {
      window.evil_368 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  