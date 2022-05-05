
  describe("some-evil-spec=852", () => {
    it("evil-block-852", () => {
      window.evil_852 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  