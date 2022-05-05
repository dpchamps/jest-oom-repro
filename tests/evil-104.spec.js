
  describe("some-evil-spec=104", () => {
    it("evil-block-104", () => {
      window.evil_104 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  