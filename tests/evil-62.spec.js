
  describe("some-evil-spec=62", () => {
    it("evil-block-62", () => {
      window.evil_62 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  