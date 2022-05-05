
  describe("some-evil-spec=27", () => {
    it("evil-block-27", () => {
      window.evil_27 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  