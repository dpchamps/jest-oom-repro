
  describe("some-evil-spec=3", () => {
    it("evil-block-3", () => {
      window.evil_3 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  