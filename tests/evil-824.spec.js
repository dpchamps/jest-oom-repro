
  describe("some-evil-spec=824", () => {
    it("evil-block-824", () => {
      window.evil_824 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  