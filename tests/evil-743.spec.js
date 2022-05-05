
  describe("some-evil-spec=743", () => {
    it("evil-block-743", () => {
      window.evil_743 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  