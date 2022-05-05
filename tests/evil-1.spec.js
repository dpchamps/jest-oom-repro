
  describe("some-evil-spec=1", () => {
    it("evil-block-1", () => {
      window.evil_1 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  