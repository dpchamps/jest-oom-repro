
  describe("some-evil-spec=350", () => {
    it("evil-block-350", () => {
      window.evil_350 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  