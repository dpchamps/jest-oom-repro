
  describe("some-evil-spec=6", () => {
    it("evil-block-6", () => {
      window.evil_6 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  