
  describe("some-evil-spec=105", () => {
    it("evil-block-105", () => {
      window.evil_105 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  