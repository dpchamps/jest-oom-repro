
  describe("some-evil-spec=731", () => {
    it("evil-block-731", () => {
      window.evil_731 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  