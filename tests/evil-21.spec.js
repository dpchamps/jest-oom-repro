
  describe("some-evil-spec=21", () => {
    it("evil-block-21", () => {
      window.evil_21 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  