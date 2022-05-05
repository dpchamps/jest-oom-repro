
  describe("some-evil-spec=619", () => {
    it("evil-block-619", () => {
      window.evil_619 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  