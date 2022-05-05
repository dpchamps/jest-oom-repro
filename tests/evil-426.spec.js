
  describe("some-evil-spec=426", () => {
    it("evil-block-426", () => {
      window.evil_426 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  