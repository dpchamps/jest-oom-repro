
  describe("some-evil-spec=34", () => {
    it("evil-block-34", () => {
      window.evil_34 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  